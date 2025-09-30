import { useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// Enhanced hook that returns a ref for the scroll container and exposes the
// locomotive instance via a mutable ref on demand. Accepts options to tune
// smoothing behaviour.
function useLocomotiveImpl(options = {}, externalRef) {
	const containerRef = useRef(null);
	const instanceRef = useRef(null);

	useEffect(() => {
		if (typeof window === "undefined") return;
		if (!containerRef.current) return;

		// tuning: lerp controls the easing, multiplier can speed up/down scroll
		// For a smoother, slightly slower feel we use a smaller lerp and <1 multiplier.
		const { smooth = true, lerp = 0.05, multiplier = 0.85 } = options;

		const loco = new LocomotiveScroll({
			el: containerRef.current,
			smooth,
			lerp,
			multiplier,
			smartphone: { smooth },
			tablet: { smooth },
		});

		instanceRef.current = loco;
		// expose globally so other hooks (ScrollTrigger proxy, route updates) can access it
		try {
			window.loco = loco;
		} catch (e) {
			// ignore in SSR or locked environments
		}

		const update = () => loco.update();

		// update on resize and when images/fonts load to avoid stutter
		window.addEventListener("resize", update);
		window.addEventListener("load", update);

		// images might change layout after load; observe them to trigger update
		const imgs = Array.from(containerRef.current.querySelectorAll("img"));
		const imgLoadHandler = () => loco.update();
		imgs.forEach((i) => i.addEventListener("load", imgLoadHandler));

		return () => {
			window.removeEventListener("resize", update);
			window.removeEventListener("load", update);
			imgs.forEach((i) => i.removeEventListener("load", imgLoadHandler));
			console.log("[useLocomotive] destroy");
			if (loco) loco.destroy();
			try {
				if (window && window.loco === loco) window.loco = null;
			} catch (e) {
				// ignore
			}
			instanceRef.current = null;
		};
	}, [options.smooth, options.lerp, options.multiplier]);

	// If a parent forwarded a ref, expose the containerRef and the instanceRef
	useImperativeHandle(
		externalRef,
		() => ({ container: containerRef.current, locomotive: instanceRef.current }),
		[]
	);

	return { containerRef, instanceRef };
}

const useLocomotive = (options = {}) => useLocomotiveImpl(options, null);

export default useLocomotive;

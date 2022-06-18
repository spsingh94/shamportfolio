import React, { useState, useEffect } from 'react';

export function useImageAnimationJS(project) {
    const [animateImages, setAnimateImages] = useState("");

    useEffect(() => {
        const onScroll = () => animateProjectImages(window.pageYOffset);

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const animateProjectImages = (offset) => setAnimateImages(offset >= (project.current.offsetTop - 700) ? " activate" : " revert");

    return animateImages;
}
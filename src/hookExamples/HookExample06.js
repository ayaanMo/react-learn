import React, { useState, useEffect, useCallback } from 'react';

function useSize() {
    const [size, setSise] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });
    const onResize = useCallback(() => {
        setSise({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])
    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [])
    return size;
}

function HookExample06() {
    const size = useSize();
    return <>
        <p>{`屏幕尺寸：${size.width}*${size.height}`}</p>
    </>
}

export default HookExample06;

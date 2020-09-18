import React, { useState, useEffect } from 'react';
import './hooks.css';
// useEffect Hook 看做componnetDidMount componentDidUpdate和componnetWillUnmount这三个函数的整合
// 1.作为componentDidMount使用,[]作第二个参数
// 2.作为componnetDidUpdate使用，可指定依赖
// 3.作为componnetWillUnmount使用，通过return
var timer;
var countTime = 0;
function HookExample02() {
    const [time, setTime] = useState({ h: "00", m: "00", s: "00", ms: "00" });
    const keepTime = () => {
        console.log(Math.random(100))
        let h = parseInt(countTime / 1000 / 60 / 60);
        let m = parseInt(countTime / 1000 / 60) % 60;
        let s = parseInt(countTime / 1000) % 60;
        let ms = parseInt(countTime / 10) % 100;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        ms = ms < 10 ? '0' + ms : ms;
        countTime += 10;
        setTime({ h: h, m: m, s: s, ms: ms });
    }
    const stopTime = () => {
        clearInterval(timer);
        timer = null;
        countTime = 0;
    }
    const clearTime = () => {
        clearInterval(timer);
        setTime({ h: "00", m: "00", s: "00", ms: "00" });
    }
    const startTime = () => {
        timer = setInterval(keepTime, 10);
    }
    useEffect(() => {
        startTime();
        return () => {
            stopTime();
        };
    }, []);
    return (
        <div className="main">
            <div style={{ paddingTop: "50px", fontSize: "30px", fontWeight: "700" }}>
                <span>{time.h}时{time.m}分{time.s}秒{time.ms}</span>
            </div>
            <div className="public" onClick={startTime}>开始</div>
            <div className="public" onClick={stopTime}>暂停</div>
            <div className="public" onClick={clearTime}>停止</div>
        </div>
    )
}

export default HookExample02;

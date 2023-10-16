import { useState, useEffect } from "react";
import '../circle.css'

const Circle = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updatePosition);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
        };
    }, [])

    return <div className="circle" style={{ left: position.x, top: position.y}}></div>;
};
 
export default Circle;
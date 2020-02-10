declare function animateTo(opts: {
    element: string | number;
    offset?: number;
    speed?: number;
}, callback?: (err?: any, value?: any) => void): Promise<void>;
export default animateTo;

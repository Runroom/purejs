declare function anchorTo(opts: {
    element: string | number;
    offset?: number;
}, callback?: (err?: any, value?: any) => void): Promise<void>;
export default anchorTo;

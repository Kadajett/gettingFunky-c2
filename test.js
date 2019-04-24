describe("once", () => {
    beforeEach(() => {
        window.myFn = () => { };
        spyOn(window, "myFn");
    });

    it("without `once`, a function always runs", () => {
        myFn();
        myFn();
        myFn();
        expect(myFn).toHaveBeenCalledTimes(3);
    });
    it("with 'once', a function runs one time", () => {
        window.onceFn = once(window.myFn);
        spyOn(window, "onceFn").and.callThrough();
        onceFn();
        onceFn();
        onceFn();
        expect(onceFn).toHaveBeenCalledTimes(3);
        expect(myFn).toHaveBeenCalledTimes(1);
    });
});

describe("onceAfter", () => {
    it("should call the first function once and the other after", () => {
        func1 = () => { };
        spyOn(window, "func1");
        func2 = () => { };
        spyOn(window, "func2");
        onceFn = onceAfter(func1, func2);


        onceFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(0);
        onceFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(1);
        onceFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(2);
        onceFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(3);

    });
})

describe("Alternate", () => {
    it("should call alternate functions", () => {
        func1 = () => { console.log("func1") };
        spyOn(window, "func1");
        func2 = () => { console.log("func2") };
        spyOn(window, "func2");
        alternateFn = alternate(func1, func2);


        alternateFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(0);
        alternateFn();
        expect(func1).toHaveBeenCalledTimes(1);
        expect(func2).toHaveBeenCalledTimes(1);
        alternateFn();
        expect(func1).toHaveBeenCalledTimes(2);
        expect(func2).toHaveBeenCalledTimes(1);
        alternateFn();
        expect(func1).toHaveBeenCalledTimes(2);
        expect(func2).toHaveBeenCalledTimes(2);

    });
})

describe("ThisManyTimes", () => {
    it("should limit the number of times a function can be called", () => {
        // number of times the function should be able to run.
        let count = 4;
        func1 = () => { console.log("func1") };
        spyOn(window, "func1");

        thisManyFn = thisManyTimes(func1, count);


        thisManyFn();
        expect(func1).toHaveBeenCalledTimes(1);

        thisManyFn();
        expect(func1).toHaveBeenCalledTimes(2);

        thisManyFn();
        expect(func1).toHaveBeenCalledTimes(3);

        thisManyFn();
        expect(func1).toHaveBeenCalledTimes(4);

        thisManyFn();
        expect(func1).toHaveBeenCalledTimes(4);
    });
})
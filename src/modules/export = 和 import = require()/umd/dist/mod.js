(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    const obj = {
        getNumber() {
            return 222;
        }
    };
    return obj;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBQSxNQUFNLEdBQUcsR0FBRztRQUNWLFNBQVM7WUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQztLQUNGLENBQUM7SUFFRixPQUFTLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9iaiA9IHtcbiAgZ2V0TnVtYmVyKCk6IG51bWJlcntcbiAgICByZXR1cm4gMjIyO1xuICB9XG59O1xuXG5leHBvcnQgPSBvYmo7XG4iXX0=
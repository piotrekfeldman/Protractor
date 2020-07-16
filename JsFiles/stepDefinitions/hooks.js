"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@Calculator" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Chuj Ci w Dupsko");
});
cucumber_1.Before({ tags: "@foo and @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});
cucumber_1.After({ tags: "@Calculator" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Chuj Ci w Dupsko LOL");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status == cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBK0M7QUFDL0MsMkNBQW1DO0FBRW5DLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLEVBQUU7SUFDMUIsK0RBQStEO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLEVBQUU7SUFDOUIsd0VBQXdFO0FBQzFFLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsRUFBRTtJQUMzQiwrREFBK0Q7SUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFlLFFBQVE7O1FBRTNCLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUcsaUJBQU0sQ0FBQyxNQUFNLEVBQ3pDO1lBQ0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQSJ9
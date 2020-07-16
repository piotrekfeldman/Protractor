import {After, Before, Status} from "cucumber";
import {browser} from "protractor";

Before({tags: "@Calculator"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Chuj Ci w Dupsko");
  });
  
  Before({tags: "@foo and @bar"}, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
  });

  After({tags: "@Calculator"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Chuj Ci w Dupsko LOL");
  });

  After(async function(scenario) {

    if(scenario.result.status== Status.FAILED)
    {
     const screenshot = await browser.takeScreenshot();
     this.attach(screenshot, "image/png");
    }
  })
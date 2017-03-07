import {autoinject, useView} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";

@autoinject
@useView("../views/app.html")
export class App {
    public router;

    public constructor(router: Router) {
        this.router = router;
    }

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Test";

        config.options.pushState = true;
        config.options.compareQueryParams = true;

        config.map([
            // App.
            {
                route: "",
                name: "app.index",
                moduleId: "/assets/app/view-models/index.js",
                nav: true,
                title: "Dashboard"
            }
        ]);

        this.router = router;
    }
}

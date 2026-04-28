import { Router as WouterRouter, Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ShipOwners from "@/pages/ShipOwners";
import Seafarers from "@/pages/Seafarers";
import Vacancies from "@/pages/Vacancies";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

const wouterBase = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/index.html" component={Home} />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/ship-owners" component={ShipOwners} />
      <Route path="/seafarers" component={Seafarers} />
      <Route path="/vacancies" component={Vacancies} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      {/* Router must wrap Layout so Header/Footer Links share the same base as routes */}
      <WouterRouter base={wouterBase}>
        <Layout>
          <AppRoutes />
        </Layout>
      </WouterRouter>
    </TooltipProvider>
  );
}

export default App;

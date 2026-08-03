import { createFileRoute, Outlet } from "@tanstack/react-router";
const Route = createFileRoute("/services")({
  component: () => <Outlet />
});
export {
  Route
};

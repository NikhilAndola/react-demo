import * as React from "react";
import "./styles.css";
import Input from "./components/Input";
import { ErrorBoundary } from "react-error-boundary";
export default function App() {
  return (
    <div className="App">
      <h1>Forward Ref</h1>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Input placeholder="Enter name..." value={12312331} />
      </ErrorBoundary>
    </div>
  );
}

import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal } from 'lucide-react';

export function AlertDemo() {
  return (
    <Alert>
      x
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}

function HomePage() {
  return (
    <>
      <h2 className="text-2xl">Home</h2>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </>
  );
}

export default HomePage;

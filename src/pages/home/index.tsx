import { CustomInput } from '../../components/input';

export function Home() {
  return (
    <div className="flex flex-col items-center h-screen w-6xl py-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Chat Example</h1>
      <div className="w-lg max-w-md">
        <CustomInput />
      </div>
    </div>
  );
}

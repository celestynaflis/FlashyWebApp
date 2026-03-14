import { Button } from "@/components/Button";
import {Input} from "@/components/Input";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-52px)] bg-white">
      <section className="app-container py-10 sm:py-14 md:py-20">
        <div className="mx-auto flex justify-center items-center w-full max-w-4xl flex-col gap-10 sm:gap-14 md:gap-20">
          <Button color="orange">
            Add new flash card
          </Button>

          <Button color="pink">
            Add new flash card
          </Button>

          <Button color="dark">
            Add new flash card
          </Button>

          <Button variant="outline" color="dark">
            Add new flash card
          </Button>

          <Button variant="outline" color="red">
            Delete flash card
          </Button>

          <Input
              label="Input Label"
              placeholder="Type..."
              isError={true}
              errorMessage={"Error message goes here"}
          />

          <Input
              label="Input Label"
              placeholder="Type..."
          />
        </div>
      </section>
    </main>
  );
}

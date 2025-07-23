import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Our Application
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-4">
            This is the about page where you can learn more about our application and its features.
          </p>
          <p className="text-gray-600 mb-4">
            Our Next.js application demonstrates modern web development practices using React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-gray-600 mb-8">
            We focus on creating fast, accessible, and user-friendly web experiences.
          </p>
        </div>

        {/* Button Showcase Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Button Component Showcase
          </h2>
          
          <div className="space-y-8">
            {/* Different Sizes */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Different Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  size="small"
                  shape="rounded-md"
                  variant="primary"
                  onClick={() => alert('Small button clicked!')}
                >
                  Small Button
                </Button>
                <Button
                  size="medium"
                  shape="rounded-md"
                  variant="primary"
                  onClick={() => alert('Medium button clicked!')}
                >
                  Medium Button
                </Button>
                <Button
                  size="large"
                  shape="rounded-md"
                  variant="primary"
                  onClick={() => alert('Large button clicked!')}
                >
                  Large Button
                </Button>
              </div>
            </div>

            {/* Different Shapes */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Different Shapes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  size="medium"
                  shape="rounded-sm"
                  variant="secondary"
                  onClick={() => alert('Sharp corners button clicked!')}
                >
                  Sharp Corners
                </Button>
                <Button
                  size="medium"
                  shape="rounded-md"
                  variant="secondary"
                  onClick={() => alert('Medium rounded button clicked!')}
                >
                  Medium Rounded
                </Button>
                <Button
                  size="medium"
                  shape="rounded-full"
                  variant="secondary"
                  onClick={() => alert('Fully rounded button clicked!')}
                >
                  Fully Rounded
                </Button>
              </div>
            </div>

            {/* Different Variants */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Different Variants</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  size="medium"
                  shape="rounded-md"
                  variant="primary"
                  onClick={() => alert('Primary button clicked!')}
                >
                  Primary
                </Button>
                <Button
                  size="medium"
                  shape="rounded-md"
                  variant="secondary"
                  onClick={() => alert('Secondary button clicked!')}
                >
                  Secondary
                </Button>
                <Button
                  size="medium"
                  shape="rounded-md"
                  variant="outline"
                  onClick={() => alert('Outline button clicked!')}
                >
                  Outline
                </Button>
              </div>
            </div>

            {/* Combination Examples */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Creative Combinations</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  size="small"
                  shape="rounded-full"
                  variant="primary"
                  onClick={() => alert('Small round primary clicked!')}
                >
                  Small & Round
                </Button>
                <Button
                  size="large"
                  shape="rounded-sm"
                  variant="outline"
                  onClick={() => alert('Large sharp outline clicked!')}
                >
                  Large & Sharp Outline
                </Button>
                <Button
                  size="medium"
                  shape="rounded-full"
                  variant="secondary"
                  disabled={true}
                >
                  Disabled Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

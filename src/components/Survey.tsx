import surveyData from '../survey/data';

const Survey = () => {
  return (
    <div 
      x-data={`${JSON.stringify(surveyData)}`}
      className="md:p-8 p-0 max-w-5xl mx-auto flex items-center justify-center h-screen"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full flex flex-col justify-between">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Step <span x-text="currentStep"></span> of <span x-text="steps.length"></span></h2>
          <p className="text-gray-700" x-text="steps[currentStep - 1].instruction"></p>
        </div>
        
        <div className="flex justify-between">
          <button
            x-on:click="currentStep > 1 && currentStep--"
            x-bind:disabled="currentStep === 1"
            x-bind:class="currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          >
            Previous
          </button>
          
          <button
            x-on:click="currentStep < steps.length && currentStep++"
            x-bind:disabled="currentStep === steps.length - 1"
            x-bind:class="currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey; 
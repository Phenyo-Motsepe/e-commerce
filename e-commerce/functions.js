const INTEL_OPTIONS = [
  {label: 'Core i3', price: 2114.23}, 
  {label: 'Core i5', price: 3699.90}, 
  {label: 'Core i7', price: 5990.90}, 
  {label: 'Core i9', price: 9161.66}, 
  {label: 'Core Ultra', price: 8104.55}, 
];

const RYZEN_OPTIONS = [
  {label: 'Ryzen 5', price: 3347.53}, 
  {label: 'Ryzen 6', price: 4228.46}, 
  {label: 'Ryzen 7', price: 5673.95}, 
  {label: 'Ryzen 9', price: 8633.10}, 
  {label: 'Ryzen AI', price: 6871.25}, 
];

const RAM_SIZE_OPTIONS = [
  {label: '8GB', price: 616.65},
  {label: '16GB', price: 1145.21}, 
  {label: '32GB', price: 2026.14}, 
  {label: '64GB', price: 3699.90}, 
  {label: '128GB', price: 6871.25}, 
];

const CATALOG = [
  Hardware: {
    Motherboard: {
      step2Label: '2. Select Form Factor',
      step2Options: [
        {label: ATX, price: 3171.99},
        {label: Micro-ATX, price: 2466},
        {label: Mini-ITX, price: 3699.90}, 
      ],
    },
    CPU: {
        step2Label: '2. Select Processor Line', Step2Branches: { 
          Intel: { price: 0, step3Label: '3. Select Intel Processor (Max 5)', step3Options: INTEL_OPTIONS },
          Ryzen: { price: 0, step3Label: '3. Select Ryzen Processor (Max 5)', step3Options: RYZEN_OPTIONS },
        },    
    },
    RAM; {
       step2Label: '2. Select Memory Type', Step2Branches{
        DDR4: { price: 0, step3Label: '3. Select RAM Size (Max 5)', step3Options: RAM_SIZE_OPTIONS },
        DDR5: { price: 25, step3Label: '3. Select RAM Size (Max 5)', step3Options: RAM_SIZE_OPTIONS },
       },
    },
    'Hard Drive': {
      step2Label: '2. Select Hard-drive Type', Step2Options[
        {label: , price: },
        {label: , price: },
        {label: , price: },
      ],
    },
    GPU: {
      step2Label: '2. Select Hard-drive Type', Step2Options[
        {label: , price: },
        {label: , price: },
        {label: , price: },
      ],
    },
    'Power Supply': {
      step2Label: '2. Select Wattage', Step2Options[
        {label: , price: },
        {label: , price: },
        {label: , price: },
      ],
    },
  }; 
];

import { RoboticKit } from '../types/product.types';

export const products: RoboticKit[] = [
  {
    id: 'kit-001',
    name: 'Beginner Robotics Kit',
    description: 'Perfect for students new to robotics. Includes basic sensors, motors, and a simple controller with our custom acrylic chassis. Comes with step-by-step tutorial and educational materials.',
    category: 'beginner',
    price: 4500,
    currency: 'PKR',
    features: [
      'Custom acrylic chassis',
      'Basic sensors (IR, Ultrasonic)',
      'DC motors with wheels',
      'Arduino-based controller',
      'Step-by-step tutorial',
      'Local components'
    ],
    specifications: {
      'Power Supply': '9V Battery',
      'Microcontroller': 'Arduino Nano',
      'Sensors': 'IR Sensor x2, Ultrasonic Sensor x1',
      'Motors': 'DC Motors x2 with wheels',
      'Chassis Material': '5mm Acrylic',
      'Dimensions': '15x20x10 cm'
    },
    images: [],
    stock: 50,
    rating: 4.5,
    reviews: 24,
    localSourcing: true,
    chassisType: 'acrylic',
    tags: ['beginner', 'education', 'arduino', 'local'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    components: [
      {
        id: 'comp-001',
        name: 'Arduino Nano',
        type: 'microcontroller',
        brand: 'Generic',
        specifications: {
          'Processor': 'ATmega328P',
          'Clock Speed': '16 MHz',
          'Digital I/O': '22',
          'Analog Inputs': '8'
        },
        localSupplier: true,
        supplierInfo: {
          name: 'Pak Electronics',
          location: 'Karachi',
          contact: '+92 300 1234567'
        }
      },
      {
        id: 'comp-002',
        name: 'HC-SR04 Ultrasonic Sensor',
        type: 'sensor',
        brand: 'Generic',
        specifications: {
          'Range': '2cm - 400cm',
          'Accuracy': '3mm',
          'Operating Voltage': '5V'
        },
        localSupplier: true,
        supplierInfo: {
          name: 'Sensors Pakistan',
          location: 'Lahore',
          contact: '+92 300 7654321'
        }
      }
    ],
    difficultyLevel: 1,
    assemblyTime: '2-3 hours',
    educationalValue: [
      'Basic electronics understanding',
      'Introduction to programming',
      'Sensor integration',
      'Mechanical assembly'
    ],
    targetAudience: ['Students', 'Beginners', 'Hobbyists']
  },
  {
    id: 'kit-002',
    name: 'Advanced Automation Kit',
    description: 'For hobbyists and professionals. Features multiple sensors, programmable controller, and modular acrylic chassis design. Suitable for automation projects and IoT applications.',
    category: 'advanced',
    price: 12000,
    currency: 'PKR',
    features: [
      'Modular acrylic chassis',
      'Multiple sensors (Temperature, Humidity, Light)',
      'WiFi connectivity',
      'Advanced programming',
      'IoT capabilities',
      'Customizable design'
    ],
    specifications: {
      'Power Supply': '12V DC Adapter',
      'Microcontroller': 'ESP32',
      'Sensors': 'Temperature, Humidity, Light, Motion',
      'Connectivity': 'WiFi, Bluetooth',
      'Chassis Material': '8mm Acrylic',
      'Dimensions': '25x30x15 cm'
    },
    images: [],
    stock: 25,
    rating: 4.8,
    reviews: 18,
    localSourcing: true,
    chassisType: 'acrylic',
    tags: ['advanced', 'iot', 'automation', 'wifi'],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
    components: [
      {
        id: 'comp-003',
        name: 'ESP32 Development Board',
        type: 'microcontroller',
        brand: 'Generic',
        specifications: {
          'Processor': 'Dual-core 32-bit',
          'WiFi': '802.11 b/g/n',
          'Bluetooth': 'v4.2 BR/EDR and BLE',
          'Memory': '520KB SRAM'
        },
        localSupplier: true,
        supplierInfo: {
          name: 'MicroTech Pakistan',
          location: 'Islamabad',
          contact: '+92 300 5555555'
        }
      }
    ],
    difficultyLevel: 3,
    assemblyTime: '4-6 hours',
    educationalValue: [
      'IoT programming',
      'Sensor networks',
      'Data logging',
      'Remote control'
    ],
    targetAudience: ['Hobbyists', 'Engineers', 'Researchers']
  },
  {
    id: 'kit-003',
    name: 'Industrial Prototype Kit',
    description: 'Advanced kit with industrial-grade components, multiple interface options, and heavy-duty acrylic chassis for prototyping industrial automation solutions.',
    category: 'industrial',
    price: 25000,
    currency: 'PKR',
    features: [
      'Heavy-duty acrylic chassis',
      'Industrial sensors and actuators',
      'PLC programming capability',
      'Multiple interface options',
      'Professional grade',
      'Customizable I/O'
    ],
    specifications: {
      'Power Supply': '24V Industrial PSU',
      'Controller': 'Raspberry Pi + Arduino',
      'I/O Options': 'Digital, Analog, PWM',
      'Communication': 'RS485, Ethernet, CAN',
      'Chassis Material': '10mm Industrial Acrylic',
      'Dimensions': '40x50x25 cm'
    },
    images: [],
    stock: 10,
    rating: 4.9,
    reviews: 8,
    localSourcing: true,
    chassisType: 'acrylic',
    tags: ['industrial', 'prototype', 'automation', 'professional'],
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25'),
    components: [
      {
        id: 'comp-004',
        name: 'Raspberry Pi 4',
        type: 'microcontroller',
        brand: 'Raspberry Pi',
        specifications: {
          'Processor': 'Quad-core Cortex-A72',
          'RAM': '4GB',
          'Connectivity': 'Dual-band WiFi, Bluetooth 5.0',
          'Ports': '2x USB 3.0, 2x USB 2.0'
        },
        localSupplier: true,
        supplierInfo: {
          name: 'Tech Importers PK',
          location: 'Karachi',
          contact: '+92 300 9998888'
        }
      }
    ],
    difficultyLevel: 4,
    assemblyTime: '8-12 hours',
    educationalValue: [
      'Industrial automation',
      'PLC programming',
      'System integration',
      'Industrial communication protocols'
    ],
    targetAudience: ['Professionals', 'Industrial users', 'Research institutions']
  }
];

export const productCategories = [
  {
    id: 'cat-001',
    name: 'Educational Kits',
    description: 'Kits designed for schools and universities',
    icon: '🎓',
    productCount: 8
  },
  {
    id: 'cat-002',
    name: 'Industrial Kits',
    description: 'Professional-grade robotic solutions',
    icon: '🏭',
    productCount: 5
  },
  {
    id: 'cat-003',
    name: 'Custom Solutions',
    description: 'Tailored robotic systems',
    icon: '🔧',
    productCount: 12
  },
  {
    id: 'cat-004',
    name: 'Components',
    description: 'Individual robotic components',
    icon: '⚙️',
    productCount: 50
  }
];

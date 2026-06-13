const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile and submit the monthly sales report.",
        taskDate: "2026-06-15",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Client Records",
        taskDescription: "Verify and update customer information.",
        taskDate: "2026-06-10",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Login Issue",
        taskDescription: "Resolve authentication bug reported by users.",
        taskDate: "2026-06-08",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a responsive landing page UI.",
        taskDate: "2026-06-16",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Pull Requests",
        taskDescription: "Review pending PRs from the frontend team.",
        taskDate: "2026-06-11",
        category: "Code Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website assets for better performance.",
        taskDate: "2026-06-14",
        category: "Optimization"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write API Docs",
        taskDescription: "Document all REST API endpoints.",
        taskDate: "2026-06-09",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Payment Module",
        taskDescription: "Perform QA testing on payment gateway.",
        taskDate: "2026-06-17",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Staging Build",
        taskDescription: "Deploy the latest build to staging.",
        taskDate: "2026-06-12",
        category: "Deployment"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Banner",
        taskDescription: "Design banners for the summer campaign.",
        taskDate: "2026-06-18",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Send promotional emails to subscribers.",
        taskDate: "2026-06-10",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO Audit",
        taskDescription: "Analyze website SEO performance.",
        taskDate: "2026-06-15",
        category: "SEO"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Backup Database",
        taskDescription: "Create a full backup of production data.",
        taskDate: "2026-06-14",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Apply security patches to the server.",
        taskDate: "2026-06-11",
        category: "Infrastructure"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Configure Firewall",
        taskDescription: "Update firewall rules for new services.",
        taskDate: "2026-06-07",
        category: "Security"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];

export const SetLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const GetLocalStorage = ()=>{
    
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    
   
    
}
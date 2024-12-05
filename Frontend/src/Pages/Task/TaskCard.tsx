import React from "react";
import { Link } from "react-router-dom";

// Define the type for the blog prop
interface Task {
  image: string;
  title: string;
  description: string;
}

interface CardProps {
  task: Task;  // The blog prop should follow the Blog interface
}

const TaskCard: React.FC<CardProps> = ({ task }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 p-5">

      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {task.title}
          </h5>
          
        </Link>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {task.description}
        </p>


        <Link
          to="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        
        >
          See Details

        </Link>
      </div>
    </div>
  );
};

export default TaskCard;

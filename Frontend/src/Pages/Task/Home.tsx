import React, { useEffect, useState } from 'react';
import Layout from '../../Globals/Layout/Layout';
import Card from './TaskCard';
import axios from 'axios';
import { baseURL } from '../../../config';

// Define the type for a single blog object
interface Task {
  image: string;
  title: string;
  description: string;
}

// Define the type for the state holding the blogs array
const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // State is an array of Blog objects

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${baseURL}/blog`);
      if (response.status === 200) {
        setTasks(response.data.data); // Assuming the response structure is { data: Blog[] }
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Layout>
      <div className="p-9 space-x-3">
        {tasks.length > 0 && tasks.map((task, index) => (
          <Card key={index} task={task} />  
        ))}
      </div>
    </Layout>
  );
};

export default Home;

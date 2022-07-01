const { createClient } = require('@supabase/supabase-js');
const { async } = require('regenerator-runtime');

const SERVICE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwdWdwamxpdXp6anNuYnpzYnp2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDA1NTQ5MiwiZXhwIjoxOTY5NjMxNDkyfQ.kE-wGYVWV1amg_3e5GTG93b_dY7o11ODmG6qLiRi59Y';
const SUPABASE_URL = 'https://jpugpjliuzzjsnbzsbzv.supabase.co';

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

// let id = 4;

// const main = async (id) => {
//   const { data, error } = await supabase.from('Footwear_List').select('*').eq('id', id);

//   if (error) {
//     console.error(error);
//     return;
//   }

//   console.log(data);
// };

const main = async (id) => {
  const { data, error } = await supabase.from('Footwear_List').select('*').eq('id', id);

  if (error) {
    console.error(error);
    return;
  }

  return data;
};

export default main;

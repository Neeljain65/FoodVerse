import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <div className='recipe w-80 overflow-hidden bg-white/75 p-5 rounded-2xl shadow-xl  border-2 border-blue-200 flex flex-col gap-5'>
      <div className='recipe-image h-40 overflow-hidden flex justify-center items-center rounded-lg'>
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className='block w-full'
        />
      </div>
      <div className='recipe-sort-info flex flex-col'>
        <span className='recipe-publisher text-sky-400 font-semibold text-xs uppercase tracking-widest'>
          {recipe.publisher}
        </span>
        <h2 className='recipe-title text-2xl font-medium truncate capitalize'>
          {recipe.title}
        </h2>
        <Link
          to={`/recipe-item/${recipe.id}`}
          className=' view-recipe bg-gradient-to-r from-cyan-500 to-blue-500 p-3 px-8 text-red-50 text-sm font-medium uppercase rounded-lg mt-2 inline-block tracking-wider shadow-md shadow-rose-200 self-start   outline-none'
        >
          View recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;

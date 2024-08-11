import React, { useState } from "react";

function InsertionSort() {
  const [array, setArray] = useState([64, 25, 12, 22, 11]);
  const [isSorting, setIsSorting] = useState(false);
  const [sortedArray, setSortedArray] = useState([]);

  const insertionSort = async () => {
    setIsSorting(true);
    let newArray = [...array];
    let n = newArray.length;

    for (let i = 1; i < n; i++) {
      let key = newArray[i];
      let j = i - 1;

      // Move elements of newArray[0..i-1], that are greater than key,
      // to one position ahead of their current position
      while (j >= 0 && newArray[j] > key) {
        newArray[j + 1] = newArray[j];
        j = j - 1;
      }
      newArray[j + 1] = key;

      // Update the array for visualization
      setSortedArray([...newArray]);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Add delay to visualize sorting
    }
    setIsSorting(false);
  };

  const handleSort = () => {
    setSortedArray([]);
    insertionSort();
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen w-[1260px]">
      <h1 className="text-2xl font-bold mb-4 text-black">Insertion Sort in React</h1>
      <h1 className="text-2xl font-bold mb-4 text-green-800">
        Usama Abbasi 2K22-CS-44
      </h1>
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-1/2">
        <button
          onClick={handleSort}
          className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
            isSorting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSorting}
        >
          {isSorting ? "Sorting..." : "Start Sorting"}
        </button>
        <div className="mt-6 grid grid-cols-5 gap-2">
          {(sortedArray.length > 0 ? sortedArray : array).map((num, index) => (
            <div
              key={index}
              className="bg-blue-200 text-center p-2 rounded-md shadow-md"
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InsertionSort;

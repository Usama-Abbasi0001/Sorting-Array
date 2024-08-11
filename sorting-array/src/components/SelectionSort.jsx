import React, { useState } from "react";

function SelectionSort() {
  const [array, setArray] = useState([64, 25, 12, 22, 11]);
  const [isSorting, setIsSorting] = useState(false);
  const [sortedArray, setSortedArray] = useState([]);

  const selectionSort = async () => {
    setIsSorting(true);
    let newArray = [...array];
    let n = newArray.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (newArray[j] < newArray[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap elements
        let temp = newArray[i];
        newArray[i] = newArray[minIndex];
        newArray[minIndex] = temp;
      }
      // Update the array for visualization
      setSortedArray([...newArray]);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Add delay to visualize sorting
    }
    setIsSorting(false);
  };

  const handleSort = () => {
    setSortedArray([]);
    selectionSort();
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen w-[1260px]">
      <h1 className="text-2xl font-bold mb-4 text-black">
        Selection Sort in React
      </h1>
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

export default SelectionSort;

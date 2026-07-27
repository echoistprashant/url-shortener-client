import { createContext, useContext, useState } from "react";


const ToastContext = createContext();


export function ToastProvider({ children }) {

  const [toast, setToast] = useState(null);


  const showToast = (
    message,
    type = "success"
  ) => {

    setToast({
      message,
      type,
    });


    setTimeout(() => {

      setToast(null);

    }, 3000);

  };


  return (

    <ToastContext.Provider
      value={{
        showToast,
      }}
    >

      {children}


      {toast && (

        <div
          className={`
            fixed
            right-6
            top-6
            z-50
            rounded-xl
            px-5
            py-4
            shadow-lg
            text-sm
            font-medium

            ${
              toast.type === "success"
              ? "bg-[#A5CF83] text-[#173404]"
              : "bg-red-600 text-white"
            }
          `}
        >

          {toast.message}

        </div>

      )}


    </ToastContext.Provider>

  );
}



export function useToast() {

  return useContext(ToastContext);

}
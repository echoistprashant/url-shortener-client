function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl border border-[#E6E3DB] bg-[#FAFAF8] p-8 shadow-2xl">

        <h2 className="text-2xl font-bold text-[#22262A]">
          Delete Link?
        </h2>

        <p className="mt-4 text-[#6F757B] leading-relaxed">
          This action cannot be undone.
          Once deleted, this short link and its analytics
          will be permanently removed.
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="
              rounded-xl
              border
              border-[#E6E3DB]
              bg-white
              px-5
              py-3
              font-medium
              text-[#22262A]
              hover:bg-[#F7F5F0]
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              rounded-xl
              bg-red-600
              px-5
              py-3
              font-medium
              text-white
              hover:bg-red-700
            "
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;

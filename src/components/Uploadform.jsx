import React, { useState, useRef } from 'react';
import { FaTrashAlt, FaFilePdf, FaFile, FaCheck, FaTimes } from 'react-icons/fa';
import Header from './Header';
import { createBrowserHistory } from 'history';  //iska dekhna h thoda 

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [warning, setWarning] = useState('');
  const fileInputRef = useRef(null);
  const history = createBrowserHistory();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        setWarning('Incorrect file format. Please select a PDF file.');
      } else {
        setWarning('');
      }
    }
  };

  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setWarning('');
  };

  const handleUpload = (event) => {
    event.preventDefault();

    // backend dekhne k baad yha pe axios ka use krna h

    // Reset selected file
    setSelectedFile(null);
    history.push('/chatbot');
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Header />
      <div
        className="fixed inset-0 overflow-hidden flex items-center justify-center"
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        onDrop={(e) => e.preventDefault()}
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        {/* <div className="absolute bg-white inset-0 z-0"></div> */}
        <div className="sm:max-w-lg w-full p-10 bg-white shadow-xl border rounded-3xl z-10">
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900">File Upload!</h2>
            <p className="mt-2 text-l font-semibold text-gray-400">Upload, Chat, Discover Answers</p>
          </div>
          <form className="mt-8 space-y-3" onSubmit={handleUpload}>
            {selectedFile ? (
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="flex items-center space-x-2">
                  {selectedFile.name.toLowerCase().endsWith('.pdf') ? (
                    <FaFilePdf className="text-4xl text-red-500" />
                  ) : (
                    <FaFile className="text-4xl text-blue-500" />
                  )}
                  <div className="text-lg font-semibold text-gray-700">
                    <p>{selectedFile.name}</p>
                    <p>({Math.round(selectedFile.size / 1024)} KB)</p>
                    <div className="flex items-center space-x-2">
                      {warning ? (
                        <>
                          <FaTimes className="text-red-500" />
                          <p className="text-sm text-red-500">Incorrect Format</p>
                        </>
                      ) : (
                        <>
                          <FaCheck className="text-green-500" />
                          <p className="text-sm text-green-500">Valid Format</p>
                        </>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700 ml-auto"
                    onClick={handleRemoveFile}
                  >
                    <FaTrashAlt className="text-2xl" />
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  {warning ? (
                        <>
                         <div>
                            <p className="mt-2 text-sm text-center font-semibold text-blue-500">
                            Please remove the selected file by clicking on the trash icon, and proceed to select the correct file.
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="mt-2 text-sm font-semibold text-blue-500">You can now proceed with the file upload.</p>
                        </>
                  )}
                  </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Attach Document
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center"
                    htmlFor="fileInput"
                  >
                    <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                      <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                        <img
                          className="has-mask h-36 object-center"
                          src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                          alt="freepik image"
                        />
                      </div>
                      <p className="pointer-none text-gray-500 ">
                        <span className="text-sm">Drag and drop</span> files here <br /> or{' '}
                        <a
                          href="#"
                          className="text-blue-600 hover:underline"
                          onClick={handleSelectFile}
                        >
                          select a file
                        </a>{' '}
                        from your computer
                      </p>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                  </label>
                </div>
                {warning && (
                  <div className="flex items-center space-x-2">
                    <FaTimes className="text-red-500" />
                    <p className="text-sm text-red-500">{warning}</p>
                  </div>
                )}
              </div>
            )}
            {!selectedFile && ( <p className="text-sm font-medium mt-4 text-gray-800">
              <span>File type: .pdf files are allowed</span>
            </p>
            )}
            {selectedFile && !warning && (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="my-3 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            )}
          </form>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FileUpload;



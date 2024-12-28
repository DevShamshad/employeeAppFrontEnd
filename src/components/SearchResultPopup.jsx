/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,} from "@nextui-org/react";

function SearchResultPopup(props) {
    const searchResults=props.searchResults
    const setSearchResults=props.setSearchResults
  const handleClose = () => {
    props.setShowResult(false)
    setSearchResults({})
  }
 

  return (
    <div>
      <Modal className='bg-emerald text-white' isOpen={true} onClose={handleClose}> 
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">Employee Search Result!</ModalHeader>
             {searchResults.name===undefined? <ModalBody>
             <p className='text-red'>{searchResults.message}</p>
              </ModalBody>: <ModalBody>
               <p>Name :{searchResults.name}</p>
               <p>Designation :{searchResults.designation}</p>
               <p>Contact :{searchResults.contact}</p>
              </ModalBody>}
              <ModalFooter>
                <Button className='bg-white' color="danger" variant="light" onClick={onClose}>
                  OK
                </Button>
           
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default SearchResultPopup
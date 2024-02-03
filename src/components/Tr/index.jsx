import React, { useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaSave } from "react-icons/fa";
import { motion } from 'framer-motion'

function Tr({ editId, item, editText, setEditText, handleEditUpdate, handleEdit, dispatch, remove_item }) {
    useEffect(() => {
      console.log("Tr");
    }, [])
    return (
        <motion.tr initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            {
                Number(editId) == Number(item.id) ? <td><input type='text' value={editText} onChange={(e) => setEditText(e.target.value)} /></td> : <td>{item.title}</td>
            }

            {
                Number(editId) == Number(item.id) ? <td><FaSave style={{ transform: "scale(1.25)", cursor: "pointer" }} onClick={handleEditUpdate} /></td> : <td><FaEdit style={{ transform: "scale(1.25)", cursor: "pointer" }} onClick={() => handleEdit(item)} /></td>
            }


            <td><RiDeleteBinLine style={{ color: "red", transform: "scale(1.25)", cursor: "pointer" }} onClick={() => dispatch(remove_item(item.id))} /></td>
        </motion.tr>
    )
}

export default Tr
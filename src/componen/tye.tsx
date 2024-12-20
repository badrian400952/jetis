import React, { useState } from "react";

// Definisi tipe data untuk node dalam tree (pohon) dengan kemungkinan memiliki anak
interface TreeNodeData {
    name: string; // Nama dari node
    children?: TreeNodeData[]; // Array anak-anak dari node, opsional
}

// Props untuk komponen TreeNode yang menerima node sebagai data
interface TreeNodeProps {
    node: TreeNodeData; // Data node yang akan diteruskan ke komponen TreeNode
}

// Props untuk komponen TreeView yang menerima data root dari tree
interface TreeViewProps {
    data: TreeNodeData; // Data tree root yang akan diteruskan ke komponen TreeView
}

// Komponen TreeNode yang akan menampilkan setiap node dalam tree
const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
    // State untuk membuka atau menutup (toggle) node
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Fungsi untuk toggle state isOpen (buka atau tutup node)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    // Mengecek apakah node memiliki anak (children)
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="ml-4">
            {/* Baris yang dapat diklik untuk membuka atau menutup node */}
            <div
                className={`flex items-center cursor-pointer ${hasChildren ? "text-blue-600 hover:text-blue-800" : "text-gray-600"}`}
                onClick={toggle} // Ketika diklik, jalankan fungsi toggle untuk membuka atau menutup
            >
                {/* Jika node memiliki anak, tampilkan simbol panah */}
                {hasChildren && (
                    <span
                        className={`mr-2 transition-transform ${isOpen ? "rotate-90" : ""}`}
                    >
                        ▶
                    </span>
                )}
                <span>{node.name}</span>
            </div>

            {/* Jika node terbuka dan memiliki anak, tampilkan anak-anak node */}
            {isOpen && hasChildren && (
                <div className="pl-4 border-l-2 border-gray-300">
                    {node.children!.map((child, index) => (
                        <TreeNode key={index} node={child} /> // Render anak-anak node secara rekursif
                    ))}
                </div>
            )}
        </div>
    );
};

// Komponen TreeView untuk menampilkan root dari tree
const TreeView: React.FC<TreeViewProps> = ({ data }) => {
    return (
        <div className="p-4 bg-gray-100 rounded-md shadow">
            <TreeNode node={data} /> {/* Mengirim data root ke komponen TreeNode */}
        </div>
    );
};

export default TreeView;

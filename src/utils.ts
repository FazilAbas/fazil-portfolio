/**
 * Triggers a secure download of a file by fetching it as a binary Blob,
 * creating an object URL, and programmatically clicking to bypass iframe sandbox restrictions.
 */
export const downloadFile = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch file: ${response.statusText}`);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Direct download failed. Falling back to opening in a new tab.", error);
    // Ultimate fallback: open in new tab where download works natively
    window.open(url, "_blank");
  }
};

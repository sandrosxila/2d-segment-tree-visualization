import React from 'react';

const UploadPanel = () => {
    return (
        <>
            <form name="fileRead" className="ml-1" style={ { display: 'none' } }>
                <div id="fileUploadDiv" className="file btn btn-primary">
                    Upload
                    <input id="fileUploadInput" type="file" name="file"/>
                </div>
            </form>
            <textarea id="contentTarget"></textarea>
        </>
    );
};

export default UploadPanel;
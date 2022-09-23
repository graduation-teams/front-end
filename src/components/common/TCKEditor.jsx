import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Spin, Space } from 'antd';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/common';
import { getLocalStorage } from '@utils/helpers';
import PropTypes from 'prop-types';

function TCKEditor({title, subFolder, overrideHightEditor,...props}) {
    const editorRef = useRef(null);
    const [data, setData] = useState(props.value);
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [ready, setReady] = useState(false);

    const { CKEditor, ClassicEditor } = editorRef.current || {};

    useLayoutEffect(() => {
        const CKEditorClass = require('@ckeditor/ckeditor5-react').CKEditor;
        editorRef.current = {
            CKEditor: CKEditorClass, //Added .CKEditor
            ClassicEditor: require('./ck-build/ckeditor'),
        };
        setEditorLoaded(true);
    }, []);

    useEffect(() => {
        setData(props.value);
    }, [props.value]);

    return (
        <React.Fragment>
            <div className="techstore-ckeditor">
                {props.title && <div className="title">{title}</div>}
                {editorLoaded ? (
                    <CKEditor
                        config={{
                            height: overrideHightEditor,
                            simpleUpload: {
                                uploadUrl: `${process.env.REACT_APP_BASE_URL_API}/media/upload/public/sub-folder/${subFolder}`,
                                //! Enable the XMLHttpRequest.withCredentials property.
                                withCredentials: false,
                            
                                //* Headers sent along with the XMLHttpRequest to the upload server.
                                headers: {
                                    Authorization: {
                                        toString() {
                                            return `${getLocalStorage('token_type')} ${getLocalStorage('access_token')}`;
                                        },
                                    }
                                },
                            }
                        }}
                        editor={ClassicEditor}
                        data={data}
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            // editor.setData(props.value);
                            editor.editing.view.change(writer => {
                                writer.setStyle('min-height', '400px', editor.editing.view.document.getRoot());
                                setReady(true);
                            });
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            // setData(data);
                            if (ready && props.onChange) {
                                props.onChange(data);
                            }
                        }}
                    />
                ) : (
                    <Space size="middle">
                        <Spin size="large" />
                    </Space>
                )}
            </div>
        </React.Fragment>
    );
}

TCKEditor.propTypes = {
    title: PropTypes.string,
    subFolder: PropTypes.string,
    overrideHightEditor: PropTypes.number,

}

TCKEditor.defaultProps = {
    title: 'Description',
    subFolder: 'category',
    overrideHightEditor: 400,
}

export default withErrorBoundary(TCKEditor, {
    FallbackComponent: ErrorComponent,
});

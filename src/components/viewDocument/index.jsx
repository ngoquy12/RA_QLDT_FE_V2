import "./index.scss";
export default function ViewDocument({ content }) {
  return (
    <>
      <div className="ck ck-editor__main">
        <div className="ck-content">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

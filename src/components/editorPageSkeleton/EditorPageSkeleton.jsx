import React from "react"

const EditorPageSkeleton = () => {
  return (
    <div className="editor-page">
      <div className="editor-page-container">
        <h2 className="editor-name skeleton " style={{ color: "transparent" }}>
          Tomas Kurka 44
        </h2>
        <div className="editor-information">
          <div style={{ color: "transparent" }} className="text-paragraph skeleton">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo sequi nesciunt
            ratione placeat aperiam quaerat atque velit mollitia tenetur facilis, autem repudiandae
            ad nam numquam! Odit, quis quos facilis minus tempora pariatur. Fugiat voluptatum
            eveniet tenetur earum molestiae, itaque facere laudantium ipsa porro animi veritatis id
            veniam placeat vitae est officia. Modi excepturi, similique fugiat deleniti veniam
            voluptas iste delectus provident quod dolorum accusamus odio odit officia explicabo qui
            beatae, quia consequuntur incidunt at autem debitis totam neque dignissimos magnam.
          </div>
        </div>
      </div>
      {/* <ArticlesSmallPreview label="Redaktora články" articles={articles} /> */}
    </div>
  )
}

export default EditorPageSkeleton

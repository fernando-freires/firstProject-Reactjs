import './styles.css'
export const PostCard = ({title, cover, body, id}) => (
    <div className="post" key={id}>
      <img src={cover} alt={title}></img>
      <div key={id} className="post-content">
        <h1>{title} Post:{id}</h1>
        <p>{body}</p>
      </div>
    </div>
  )


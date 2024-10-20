type NormalLinkTypes = {
  linkName: string
  linkURL: string
}

const NormalLink: React.FC<NormalLinkTypes> = ({ linkName, linkURL }) => {
  return <a href={linkURL}>{linkName}</a>
}

export default NormalLink

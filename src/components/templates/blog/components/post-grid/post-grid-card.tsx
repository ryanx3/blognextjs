type PostGridCardProps = {
  children: React.ReactNode
}

export const PostGridCard = ({children}: PostGridCardProps) => {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  )
}
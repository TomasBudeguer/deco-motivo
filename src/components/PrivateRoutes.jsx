const PrivateRoutes = ({ children, role }) => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const idAdmin = JSON.parse(sessionStorage.getItem("idAdmin"))

    if(token && idAdmin) return children
    else location.href = "/"
}

export default PrivateRoutes;

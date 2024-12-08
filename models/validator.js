
export const canPost = (roles) => {
    return roles.includes('write:post')
}

export const canPostItContent = (roles, content_length) => {
    const can_post_role = canPost(roles)

    if(can_post_role && roles.includes('post:large'))
    {
        return true
    }

    return can_post_role && content_length <= 512
}

export const isUserBanned = (roles) => {
    return roles.includes('user:banned')
}

export const isUserConfirmed = (roles) => {
    return roles.includes('user:confirmed')
}
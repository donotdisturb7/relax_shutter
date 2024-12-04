export const formatDate = (date, options = {}) => {
    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }

    return new Date(date).toLocaleDateString(
        'fr-FR', {...defaultOptions, ...options }
    )
}

export const timeAgo = (date) => {
    // Logique pour afficher "il y a X temps"
}
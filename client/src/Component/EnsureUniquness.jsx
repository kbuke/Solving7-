export function EnsureUniqueness({
    allInstances,
    variable,
    isPatch,
    selectedInstance
}) {
    return {
        validate: (value) => {
            const trimmedValue = value?.trim().toLowerCase()

            const nameExists = allInstances?.some(instance =>
                instance?.[variable]?.trim().toLowerCase() === trimmedValue
            )

            // Creating new instance
            if (!isPatch && nameExists) {
                return "This instance already exists."
            }

            // Patching existing instance
            if (isPatch) {
                const origValue = selectedInstance?.[variable]?.trim().toLowerCase()

                // If unchanged → valid
                if (trimmedValue === origValue) {
                    return true
                }

                // If changed and exists → invalid
                if (nameExists) {
                    return "This instance already exists."
                }
            }

            return true  
        }
    }
}
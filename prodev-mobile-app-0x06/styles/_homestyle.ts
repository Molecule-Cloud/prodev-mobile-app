import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    searchGroup: {
        padding: 20,
        backgroundColor: 'white',
    },
    searchFormGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderRadius: 25,
        paddingHorizontal: 15,
    },
    searchControlGroup: {
        flex: 1,
        paddingVertical: 15,
    },
    searchFormText: {
        fontSize: 16,
        color: '#333',
    },
    searchControl: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    searchButton: {
        backgroundColor: '#34967C',
        borderRadius: 25,
        padding: 12,
        marginLeft: 10,
    },
    filterGroup: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    filterContainer: {
        alignItems: 'center',
        marginRight: 20,
        padding: 10,
        minWidth: 80,
    },
    listingContainer: {
        flex: 1,
        padding: 20,
    },
    paginationContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    showMoreButton: {
        backgroundColor: '#34967C',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
    },
    showMoreButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

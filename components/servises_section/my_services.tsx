import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLayerGroup, faCheckCircle, faSearch, faShieldAlt, faWrench } from '@fortawesome/free-solid-svg-icons';

const windowWidth = Dimensions.get('window').width;

const isMobile = windowWidth < 768;

const styles = StyleSheet.create({

    cardWithBorder: {
        borderColor: 'black', // Add border color
        borderWidth: 1, // Add border width
    },
    container: {
        marginTop: 16,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        marginLeft: 100,
        marginRight:100,
    },
    column: {
        width: isMobile ? '100%' : '30%',
        marginBottom: isMobile ? 16 : 0,
        marginRight: isMobile ? 0 : 16,
        marginLeft: isMobile ? 0 : 16,
        flex: 1,
        //marginRight: 8,
        padding: 20,
        //width: '20%'
    },
    card: {
        height: 280,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 8,
        padding: 50,
        justifyContent: 'center',
    },
    servicesText: {
        // Removed cursor property
    },
    cardBody: {
        alignItems: 'center',
    },
    servicesIcon: {
        fontSize: 36,
        textAlign: 'center',
        width: '100%',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 12,
    },
    cardText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
    },

});

const MyServices = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Services</Text>

            {isMobile ? (
                <>
                    <View style={styles.column}>
                        <TouchableHighlight
                            style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                            activeOpacity={0.7}
                            underlayColor="#00C000" // Highlight color on touch 
                        >
                            <View style={styles.cardBody}>
                                <FontAwesomeIcon icon={faClock} size="1x" style={styles.servicesIcon} />
                                <Text style={styles.cardTitle}>Website Development</Text>
                                <Text style={styles.cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.column}>
                        <TouchableHighlight
                            style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                            activeOpacity={0.7}
                            underlayColor="#008000" // Highlight color on touch 
                        >
                            <View style={styles.cardBody}>
                                <FontAwesomeIcon icon={faClock} size="1x" style={styles.servicesIcon} />
                                <Text style={styles.cardTitle}>Website Design</Text>
                                <Text style={styles.cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>


                    <View style={styles.column}>
                        <TouchableHighlight
                            style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                            activeOpacity={0.7}
                            underlayColor="#008000" // Highlight color on touch 
                        >
                            <View style={styles.cardBody}>
                                <FontAwesomeIcon icon={faClock} size="1x" style={styles.servicesIcon} />
                                <Text style={styles.cardTitle}>Website Deployment</Text>
                                <Text style={styles.cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.column}>
                        <TouchableHighlight
                            style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                            activeOpacity={0.7}
                            underlayColor="#008000" // Highlight color on touch 
                        >
                            <View style={styles.cardBody}>
                                <FontAwesomeIcon icon={faClock} size="1x" style={styles.servicesIcon} />
                                <Text style={styles.cardTitle}>SEO</Text>
                                <Text style={styles.cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.column}>
                        <TouchableHighlight
                            style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                            activeOpacity={0.7}
                            underlayColor="#008000" // Highlight color on touch 
                        >
                            <View style={styles.cardBody}>
                                <FontAwesomeIcon icon={faClock} size="1x" style={styles.servicesIcon} />
                                <Text style={styles.cardTitle}>DevOps</Text>
                                <Text style={styles.cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.column}>
                        <TouchableHighlight
                            style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                            activeOpacity={0.7}
                            underlayColor="#008000" // Highlight color on touch 
                        >
                            <View style={styles.cardBody}>
                                <FontAwesomeIcon icon={faClock} size="1x" style={styles.servicesIcon} />
                                <Text style={styles.cardTitle}>QA</Text>
                                <Text style={styles.cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </>

            ) : (
                <>
                    <View style={styles.row}>

                        <View style={styles.column}>
                            <TouchableHighlight
                                style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                                activeOpacity={0.7}
                                underlayColor="#008000" // Highlight color on touch 
                            >
                                <View style={styles.cardBody}>
                                    <FontAwesomeIcon icon={faClock} size="1x" style={styles.servicesIcon} />
                                    <Text style={styles.cardTitle}>Website Development</Text>
                                    <Text style={styles.cardText}>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>


                        <View style={styles.column}>
                            <TouchableHighlight
                                style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                                activeOpacity={0.7}
                                underlayColor="#008000" // Highlight color on touch 
                            >
                                <View style={styles.cardBody}>
                                    <FontAwesomeIcon icon={faLayerGroup} size="1x" style={styles.servicesIcon} />
                                    <Text style={styles.cardTitle}>Website Development</Text>
                                    <Text style={styles.cardText}>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>


                        <View style={styles.column}>
                            <TouchableHighlight
                                style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                                activeOpacity={0.7}
                                underlayColor="#008000" // Highlight color on touch 
                            >
                                <View style={styles.cardBody}>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" style={styles.servicesIcon} />
                                    <Text style={styles.cardTitle}>Website Development</Text>
                                    <Text style={styles.cardText}>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                    </View>

                    {/* Add another row */}
                    <View style={styles.row}>

                        <View style={styles.column}>
                            <TouchableHighlight
                                style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                                activeOpacity={0.7}
                                underlayColor="#008000" // Highlight color on touch 
                            >
                                <View style={styles.cardBody}>
                                    <FontAwesomeIcon icon={faSearch} size="1x" style={styles.servicesIcon} />
                                    <Text style={styles.cardTitle}>Website Development</Text>
                                    <Text style={styles.cardText}>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.column}>
                            <TouchableHighlight
                                style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                                activeOpacity={0.7}
                                underlayColor="#008000" // Highlight color on touch 
                            >
                                <View style={styles.cardBody}>
                                    <FontAwesomeIcon icon={faShieldAlt} size="1x" style={styles.servicesIcon} />
                                    <Text style={styles.cardTitle}>Website Development</Text>
                                    <Text style={styles.cardText}>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.column}>
                            <TouchableHighlight
                                style={[styles.card, styles.servicesText, styles.cardWithBorder]}
                                activeOpacity={0.7}
                                underlayColor="#008000" // Highlight color on touch 
                            >
                                <View style={styles.cardBody}>
                                    <FontAwesomeIcon icon={faWrench} size="1x" style={styles.servicesIcon} />
                                    <Text style={styles.cardTitle}>Website Development</Text>
                                    <Text style={styles.cardText}>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                    </View>
                </>

            )}


        </View>
    );
};


export default MyServices;

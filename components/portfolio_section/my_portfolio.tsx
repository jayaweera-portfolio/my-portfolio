import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import portfolioImage1 from '../../assets/portfolioImage1.jpg';
import portfolioImage2 from '../../assets/portfolioImage2.jpg';
import portfolioImage3 from '../../assets/portfolioImage3.jpg';
import portfolioImage4 from '../../assets/portfolioImage4.jpg';

const windowWidth = Dimensions.get('window').width;

const isMobile = windowWidth < 768;

const MyPortfolio = () => {

        // Function to open the URL when the button is pressed
        const handleLinkPress = (url: string) => {
            Linking.openURL(url);
        };

    return (

        
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Portfolio</Text>

            {isMobile ? (

                <>

                    <View style={styles.column}>
                        <View style={[styles.card, styles.cardWithBorder]}>
                            <Image source={portfolioImage1} style={styles.cardImage} />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>Snake Identifier</Text>
                                <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                <View style={styles.textCenter}>
                                <TouchableOpacity onPress={() => handleLinkPress('https://example.com')}>
                                     <View style={styles.button}>
                                        <Text style={styles.buttonText}>Link</Text>
                                    </View>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.column}>
                        <View style={[styles.card, styles.cardWithBorder]}>
                            <Image source={portfolioImage4} style={styles.cardImage} />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>wheather App</Text>
                                <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                <View style={styles.textCenter}>
                                    <Text style={styles.link}>Link</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.column}>
                        <View style={[styles.card, styles.cardWithBorder]}>
                            <Image source={portfolioImage3} style={styles.cardImage} />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>Time Management system</Text>
                                <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                <View style={styles.textCenter}>
                                    <Text style={styles.link}>Link</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.column}>
                        <View style={[styles.card, styles.cardWithBorder]}>
                            <Image source={portfolioImage2} style={styles.cardImage} />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>YouTube Clone</Text>
                                <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                <View style={styles.textCenter}>
                                    <Text style={styles.link}>Link</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.column}>
                        <View style={[styles.card, styles.cardWithBorder]}>
                            <Image source={portfolioImage1} style={styles.cardImage} />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>YouTube Clone</Text>
                                <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                <View style={styles.textCenter}>
                                    <Text style={styles.link}>Link</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.column}>
                        <View style={[styles.card, styles.cardWithBorder]}>
                            <Image source={portfolioImage4} style={styles.cardImage} />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>YouTube Clone</Text>
                                <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                <View style={styles.textCenter}>
                                    <Text style={styles.link}>Link</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </>
            ) : (
                <>


                    <View style={styles.row}>

                        <View style={styles.column}>
                            <View style={[styles.card, styles.cardWithBorder]}>
                                <Image source={portfolioImage1} style={styles.cardImage} />
                                <View style={styles.cardBody}>
                                    <Text style={styles.cardTitle}>YouTube Clone</Text>
                                    <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    <View style={styles.textCenter}>
                                        <Text style={styles.link}>Link</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.column}>
                            <View style={[styles.card, styles.cardWithBorder]}>
                                <Image source={portfolioImage4} style={styles.cardImage} />
                                <View style={styles.cardBody}>
                                    <Text style={styles.cardTitle}>YouTube Clone</Text>
                                    <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    <View style={styles.textCenter}>
                                        <Text style={styles.link}>Link</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.column}>
                            <View style={[styles.card, styles.cardWithBorder]}>
                                <Image source={portfolioImage3} style={styles.cardImage} />
                                <View style={styles.cardBody}>
                                    <Text style={styles.cardTitle}>YouTube Clone</Text>
                                    <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    <View style={styles.textCenter}>
                                        <Text style={styles.link}>Link</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>

                        <View style={styles.column}>
                            <View style={[styles.card, styles.cardWithBorder]}>
                                <Image source={portfolioImage2} style={styles.cardImage} />
                                <View style={styles.cardBody}>
                                    <Text style={styles.cardTitle}>YouTube Clone</Text>
                                    <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    <View style={styles.textCenter}>
                                        <Text style={styles.link}>Link</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.column}>
                            <View style={[styles.card, styles.cardWithBorder]}>
                                <Image source={portfolioImage1} style={styles.cardImage} />
                                <View style={styles.cardBody}>
                                    <Text style={styles.cardTitle}>YouTube Clone</Text>
                                    <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    <View style={styles.textCenter}>
                                        <Text style={styles.link}>Link</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.column}>
                            <View style={[styles.card, styles.cardWithBorder]}>
                                <Image source={portfolioImage4} style={styles.cardImage} />
                                <View style={styles.cardBody}>
                                    <Text style={styles.cardTitle}>YouTube Clone</Text>
                                    <Text style={styles.cardText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    <View style={styles.textCenter}>
                                        <Text style={styles.link}>Link</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </>
            )}


        </ScrollView >
    );
};

const styles = StyleSheet.create({

    cardWithBorder: {
        borderColor: 'black', // Add border color
        borderWidth: 1, // Add border width
    },
    container: {
        flex: 1,
        padding: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    row: {
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    column: {
        width: isMobile ? '100%' : '30%',
        marginBottom: isMobile ? 16 : 16,
        marginRight: isMobile ? 0 : 16,
        marginLeft: isMobile ? 0 : 16,
        padding: 15,
        //width: '27%', // Adjust as needed for your layout
        //marginBottom: 40,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: 200, // Adjust the image height as needed
    },
    cardBody: {
        padding: 12,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardText: {
        marginTop: 8,
    },
    textCenter: {
        alignItems: 'center',
    },
    link: {
        marginTop: 20,
        fontSize: 16,
        color: 'green', // Customize the link color
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});

export default MyPortfolio;

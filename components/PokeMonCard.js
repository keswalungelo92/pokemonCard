import { View, Text, StyleSheet, Platform, Image } from 'react-native';

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };
  

export default function PokeMonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {

    {/* function invokes */}

    const { borderColor, emoji } = getTypeDetails(type); 

  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>

      {/* Image Section */}
      <Image
        source={image}
        style={styles.image}
        accessible={true}
        accessibilityLabel={`${name} pokemon`}
      />

      {/* Type Section */}
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
            <Text style={styles.typeEmoji}>{emoji}</Text>
            <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      {/* Moves Section */}
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
      </View>

      {/* Weaknesses Section */}
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>Weakness: {weaknesses.join(', ')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
    color: '#666',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  typeContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  weaknessContainer: {
    marginBottom: 10,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4
  }
});

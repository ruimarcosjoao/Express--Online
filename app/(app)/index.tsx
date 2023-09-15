import { Text, View, ScrollView } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

function index() {
  return (
    <View className="flex-1">
      <ScrollView>
        <View className="py-2 px-4">
          <View className="w-full mt-4 h-48 bg-[#F58025] rounded-xl shadow-md text-white p-4 relative">
            <Text className="text-lg font-bold text-white/80">
              Cartão de Crédito
            </Text>
            <View className="mt-8 absolute bottom-2 right-6 flex flex-row items-center gap-0">
              <View>
                <MaterialIcons name="attach-money" size={44} color="#FFF" />
              </View>
              <Text className="text-4xl font-extrabold text-white">
                100.000,65 Kzs
              </Text>
            </View>
            <View className="botton-0 flex flex-row items-center justify-between gap-1">
              <Text className="text-white font-bold">Rui Marcos Joao</Text>
              <Text className="text-white font-mono">A006.0005....8654</Text>
              </View>
          </View>
          <Text className="text-xl mt-4 text-orange-500 font-bold">
            Operações
          </Text>
          <View className="flex flex-row items-center space-x-2 mx-auto mt-4">
            <Link href={"/settings"}>
              <View className="rounded-xl w-28 h-28 border-2 border-orange-500 flex flex-col items-center justify-center">
                <MaterialIcons name="search" size={44} color="#F58025" />
                <Text>Consultar</Text>
              </View>
            </Link>

            <Link href="/settings">
              <View className="rounded-xl w-28 h-28 border-2 border-orange-500 flex flex-col items-center justify-center">
                <MaterialCommunityIcons
                  name="bank-transfer"
                  size={44}
                  color="#F58025"
                />
                <Text>Trasnferência</Text>
              </View>
            </Link>
            <Link href={"settings"}>
              <View className="rounded-xl w-28 h-28 border-2 border-orange-500 flex flex-col items-center justify-center">
                <MaterialIcons name="history" size={44} color="#F58025" />
                <Text>Histórico</Text>
              </View>
            </Link>
          </View>
          <View className="flex flex-row items-center space-x-2 mx-auto mt-4">
            <View className="rounded-xl w-28 h-28 border-2 border-orange-500 flex flex-col items-center justify-center">
              <MaterialIcons name="search" size={44} color="#F58025" />
            </View>
            <View className="rounded-xl w-28 h-28 border-2 border-orange-500 flex flex-col items-center justify-center">
              <MaterialIcons name="search" size={44} color="#F58025" />
            </View>
            <View className="rounded-xl w-28 h-28 border-2 border-orange-500 flex flex-col items-center justify-center">
              <MaterialIcons name="search" size={44} color="#F58025" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default index;

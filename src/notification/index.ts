import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export async function schedulePushNotification(subtitle: string) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Download concluído",
            body: `${subtitle}`,
            data: { data: "goes here" },
            color: "black",
        },
        trigger: { seconds: 2 },
    });
}
